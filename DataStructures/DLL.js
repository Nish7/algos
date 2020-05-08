class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class dll{
    constructor(){
        this.head = null;
        this.tail = null;
        this.len = 0;
    }
    

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
         const prev = this.tail; // Prev --> 1 
         this.tail.next = newNode; // this.tail --> 1...2
         this.tail.next.prev = prev; // 
         this.tail = newNode;
        }

        this.len++;

    }


    pop(){
        if(!this.head) return undefined;

        const delNode = this.tail;
        
        if(this.len == 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.tail = delNode.prev;
            this.tail.next = null;
        }
        
        this.len--;   
        return delNode;

    }

    shift(){
        if(!this.head) return undefined;

        const delHead = this.head;

        if(this.len == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = delHead.next;
            this.head.prev = null;
        }
        
        this.len--;
        delHead.next = null;
        return delHead;
    }

    unshift(val){
        let newNode = new Node(val)

        if(!this.head) return this.push(val);
        
        const oldHead = this.head;
        this.head = newNode;
        this.head.next = oldHead;
        this.head.next.prev  = newNode; 
        this.len++;

        return true;
    }

    get(pos){
        if(pos < 0 || pos >= this.len) return null;

        let checkLen = Math.floor(this.len/2);
        // console.log( checkLen,  pos);
        let curr;
        let cnt;
        
        if(pos <= checkLen){
            curr = this.head;
            cnt = 0;
            while(cnt !== pos){
                curr = curr.next;
                cnt++;
            }

        } else {
            curr = this.tail;
            cnt = this.len - 1;
            while(cnt !== pos){
                curr = curr.prev;
                cnt--;
            }
        }

        return curr;

    }

    set(pos,val){

        let fndNode = this.get(pos);

        if(!fndNode) return false;
        fndNode.val = val;
        return true;
    }   

    insert(pos, val){
        if(pos < 0 || pos > this.len) return false;
        if(pos === 0) return this.unshift(val);
        if(pos === this.len) return this.push(val)

        let newNode = new Node(val);
        let prevs = this.get(pos-1);
        let post = this.get(pos);
        
        prevs.next = newNode;
        newNode.prev = prevs;
        newNode.next = post;
        post.prev = newNode;

        this.len++
        return true;
    }


    remove(pos){
        if(pos === 0) return this.shift();
        if(pos === this.len - 1) return this.pop();

        let delNode = this.get(pos);
        let post = delNode.next;
        let pre = delNode.prev;
        
        delNode.prev.next = post;
        post.prev = pre;
        this.len--;

        return delNode;

    }



}

   // head        tail
    // 1 --> 2 --> 3 
    // 0     1     2


let sam = new dll; 
sam.push(1);
sam.push(2);
sam.push(3);


//sam.pop();

//sam.shift();

// sam.unshift(0);

// sam.get(1);

// sam.set(7, 10);

// sam.insert(4,6);

sam.remove(1);

console.log(sam);