//Binary Search Tree

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class bst{
    constructor(){
        this.root = null;
    }

    insert(val){

        let newNode = new Node(val);

        if(!this.root) {
            this.root = newNode;
            return this
        }

        let curr = this.root;

        while(true){
            
            if(val < curr.val){
                if(!curr.left){
                    curr.left = newNode;
                    return this;
                }
                    curr = curr.left;
                    
            } else if(val > curr.val){

                if(!curr.right){
                    curr.right = newNode;
                    return this;
                }
                    curr = curr.right;
            } else if (val == curr.val) return undefined;
        }



    }


    contains(val){
        if(!this.root) return false;

        let curr = this.root;
        // let found = false;

        while(curr && true){
            if(val < curr.val){ 
                curr = curr.left;
            } else if ( val > curr.val){
                curr = curr.right;
            } else{
                return true;
            }

        }

        return false;

    } 

    find(val){
        if(!this.root) return false;

        let curr = this.root;
        let found = false;

        while(curr && !found){
            if(val < curr.val){ 
                curr = curr.left;
            } else if ( val > curr.val){
                curr = curr.right;
            } else{
                found = true;
            }

        }

        if(!found) return undefined;
        return curr;
    }


}

/*

        11
    9       12
7      10                    

*/

let tree = new bst;
tree.insert(11);
tree.insert(9);
tree.insert(10);
tree.insert(7);
tree.insert(12);



console.log(tree.find(11));