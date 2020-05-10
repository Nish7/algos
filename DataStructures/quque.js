//queue
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    enqueue(val){
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        }


        return this.len++;
    }

    dequeque(){
        if(!this.head) return undefined;

        let prev = this.head;
        this.head = this.head.next;

        this.len--;
        if(this.len == 0 ) this.tail = null;
        

        return prev;
    }


}

let q = new queue;
q.enqueue(12);
q.enqueue(14);

q.dequeque()
q.dequeque()
q.dequeque()

console.log();

//Push 
//shift


