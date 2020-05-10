//Stack

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class stacks{
    constructor(){
        this.len= 0;
        this.head= null;
        this.tail = null;
    }

    push(val){

        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.len++
        return this.len;
    }

    pop(){

        if(!this.head) return undefined;

        let curr = this.head.next;
        let temp = curr;

        while(curr.next){
            temp = curr;
            curr = curr.next;
        }
        
        this.tail = temp;
        this.tail.next = null;

        if(this.len === 0){
            this.head = null;
            this.tail = null;
        }

        this.len--; 

        return curr.val;
    }
}

let stack = new stacks;

stack.push(12);
stack.push(14);
stack.push(1);
stack.push(72);
stack.push(112);

stack.pop();
stack.pop();
// stack.pop();


console.log(stack);
