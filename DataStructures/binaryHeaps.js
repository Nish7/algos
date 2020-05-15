// Binary Heaps

class BinaryHeap{
    constructor() {
        this.val = [41, 39, 27, 2, 1];
    }


        insert(val){
        this.val.push(val);
        this.bubbleUp();
        }

        bubbleUp() {
        let pos = this.val.length - 1;
        let child = this.val[pos];

        while (pos > 0) {
            let ParentPos = Math.floor((pos - 1) / 2);
            let parent = this.val[ParentPos];

            if (child <= parent) break;

            this.val[ParentPos] = child;
            this.val[pos] = parent;
            pos = ParentPos;
            // console.log(this);
        }
    }

    extractMax(){

        let popped = this.val[0];
        let max = this.val.pop();
        this.val[0] = max;

        this.sinkDown();

        return popped;
    }

    sinkDown(){

        let parentPos = 0;
        let parent = this.val[parentPos];
        
        while(true){
            let leftChildpos = 2 * parentPos + 1;
            let rightChildpos = 2 * parentPos + 2;
            let right, left;
            let swapPos = null;

            if(leftChildpos < this.val.length){
                left = this.val[leftChildpos];
                if(left > parent){
                    swapPos = leftChildpos;
                }
            }

            if (rightChildpos < this.val.length) {
                right = this.val[rightChildpos];
                if ((swapPos == null && right > parent) || (swapPos !== null && right > left)) {
                    swapPos = rigthChildpos;
                }
            }

            if(swapPos === null) break;

            this.val[parentPos] = this.val[swapPos];
            this.val[swapPos] = parent;
            parentPos = swapPos;

        } // While end
    }
  
}

let bh = new BinaryHeap();
console.log(bh.extractMax());
console.log(bh)






