// class Node{
//     constructor(value){
//         this.value=value,
//         this.next=null
//     }
// }

// class LinkList{
//     constructor(value){
//         this.head={
//             value:value,
//             next:null
//         }
//         this.tail=this.head
//         this.length=1
//     }

// printList(){
//     const list=[]
//     let currentCount=this.head
//     while(currentCount !== null){
//        list.push(currentCount.value)
//        currentCount=currentCount.next
//     }
//     return list
// }

//     append(value){
//         const newNode= new Node(value)
//        this.tail.next=newNode
//        this.tail=newNode
//        this.length++
//        return this

//     }
//     prepend(value){
//         const newNode= new Node(value)
//        newNode.next=this.head
//        this.head=newNode
//        this.length++

//         return this
//     }
// insert(index,value){
//     if(index >= this.length){
//         return this.append(value)
//     }
//     const newNode= new Node(value)
//     let leader= this.traversal(index-1)
//     let holderpointer = leader.next
//     leader.next=newNode
//     newNode.next=holderpointer
//     this.length++
//     return this.printList()

// }
// remove(index){
//     let leader= this.traversal(index-1)
//     let holder= leader.next
//     leader.next=holder.next
//     this.length--
//     return this.printList()
    
// }

// traversal(index){
//     let count=0
//     let currentNode=this.head
//     while(count !== index){
//         currentNode=currentNode.next
//         count++
//     }
//     return currentNode
// }


// }


// const list = new LinkList(10)
// list.append(5)
// list.append(11)
// list.append(6)
// list.prepend(9)
// list.insert(2,88)

// list.remove(1)

// console.log( list.printList())



// ---------------------------doubly linklist--------------------

class Node2{
    constructor(value){
        this.value=value,
        this.next=null,
        this.prev=null
    }
}

class DoublyLinkList{
    constructor(value){
        this.head={
            value:value,
            next:null,
            prev:null
        }
        this.tail=this.head
        this.length=1
    }

printList(){
    const list=[]
    let currentCount=this.head
    while(currentCount !== null){
       list.push(currentCount.value)
       currentCount=currentCount.next
    }
    return list
}

    append(value){
        const newNode= new Node2(value)
        newNode.prev=this.tail
       this.tail.next=newNode
       this.tail=newNode
       this.length++
       return this

    }
    prepend(value){
        const newNode= new Node2(value)
       newNode.next=this.head
       this.head.prev=newNode
       this.head=newNode
       this.length++

        return this
    }
insert(index,value){
    if(index >= this.length){
        return this.append(value)
    }
    const newNode= new Node2(value)
    let leader= this.traversal(index-1)
    let follower = leader.next
    leader.next=newNode
    newNode.prev=leader
    newNode.next=follower
    follower.prev=newNode
    this.length++
    console.log(this);
    return this.printList()

}
remove(index){
    let leader= this.traversal(index-1)
    let holder= leader.next
    leader.next=holder.next
    holder.next.prev=leader

    this.length--
    return this.printList()
    
}

traversal(index){
    let count=0
    let currentNode=this.head
    while(count !== index){
        currentNode=currentNode.next
        count++
    }
    return currentNode
}


}


const list2 = new DoublyLinkList(15)
list2.append(5)
list2.append(11)
// list.append(6)
//list2.prepend(9)
//list2.insert(2,88)

list2.remove(1)
console.log(list2);
// console.log( list2.printList())

