// // Single Linked List

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Singlelinkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.len = 0;
    }
   
    //Push method(add at the end)
    push(val){

        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
           
        }
        
        this.len++;

        return this;
    }

    //Pop (remove from end)

    pop(){

        if(!this.head){
            return undefined;
        }

        let curr = this.head;
        let temp = curr;

        while(curr.next){
            temp  = curr;
            curr = curr.next;
        }

        temp.next = null;
        this.tail = temp;
        this.len--;

        if(this.len === 0){
            this.head = null;
            this.tail = null;
        }
        
        return this;

    }

    //shift (remove from head)

    shift(){
        if(!this.head) return undefined;

        let curr = this.head;
        this.head = this.head.next;

        this.len--;

        if (this.len == 0) this.tail = null;

        return curr;

    }

    //unshift (add at head)

    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail= newNode;
        }else{
            let curr = this.head;
            this.head = newNode;
            newNode.next = curr;
            this.len++;
        }

        return this;

        
    }

    //get the val at that positon
    get(pos){
        if(pos < 0 || pos >= this.len) return null;
        let cnt = 0;
        let curr = this.head;

        while(cnt !== pos){
            curr = curr.next;
            cnt++;
        }

        return curr;
    }

    set(idx, val){

        let fndNode = this.get(idx);

        if(!fndNode) return false;
        
        fndNode.val = val;
        return true;
    }

    insert(pos, val){
        if(pos < 0 || pos > this.len ) return false;

        if (pos === this.len){
            this.push(val); 
            return true;
        }else if(pos === 0) {
            this.unshift(val); 
            return true;
        } else {

        let newNode = new Node(val);
        
        let preNode = this.get(pos-1);
        let postNext = preNode.next;

        preNode.next = newNode;
        newNode.next = postNext;

        this.len++
        return true;

    }

}
    remove(pos){
        if(pos < 0 || pos > this.len -1) return false;
        if(pos === this.len - 1 ){
            this.pop();
            return true;
        }else if(pos === 0){
            this.shift();
            return true;
        }else{
            let delNode = this.get(pos);
            let preNode = this.get(pos-1);
            let postNode = this.get(pos+1);

            preNode.next = postNode;
            this.len--;
            return delNode;
        }
        
    }

    reverse(){

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        console.log(this);
        let prev = null;
        let nextNodes;

        for(let i = 0; i < this.len; i++){
            nextNodes = node.next; // 130... --> NextNode 
            node.next = prev; // 120...null --> Node
            prev = node; // 120...null --> prev
            node = nextNodes;// 130... -->node
            console.log(this)
        }

       return this;
    }



}

//Reverse Working

/*

            nextNodes = node.next; // 130... --> NextNode 
            node.next = prev; // 120...null --> Node
            prev = node; // 120...null --> prev
            node = nextNodes;// 130... -->node

            nextNodes = node.next; // 140...  --> NextNode 
            node.next = prev; // 130...120...null --> Node
            prev = node; // 130...120...null --> prev
            node = nextNodes;// 140... -->node

            nextNodes = node.next; // 150... --> NextNode 
            node.next = prev; // 140...130...120...null --> Node
            prev = node; // 140...130...120...null --> prev
            node = nextNodes;// 150... -->node

            nextNodes = node.next; // 160... --> NextNode 
            node.next = prev; // 150...140...130...120...null --> Node
            prev = node; // 150...140...130...120...null --> prev
            node = nextNodes;// 160... -->node

*/

let sam = new Singlelinkedlist();

//Seed

 sam.push(120);
 sam.push(130);
 sam.push(140);
 sam.push(150);

 
//  sam.pop();

// sam.shift();

// sam.unshift(110);

// sam.get(3);

// sam.set(3,120);

//sam.insert(0,110);

// sam.remove(2);


console.log(sam.reverse());





