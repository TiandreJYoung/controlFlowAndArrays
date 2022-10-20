

class Governor {
    static walkAndWave(){
      console.log('goodmoring')
    }
    static laughAndSmile(){
        console.log('Have a great day')
    }
}
Governor.laughAndSmile();
Governor.walkAndWave();


class Person {
    constructor(run,jump,kick){
        this.run=run
        this.junp=jump
        this.kick=kick
        //....method
    }
  aMethod(){
    console.log("Scream")
   }
   aMethod2(){
    console.log("Play")
   }
   aMethod3(){
    console.log("fight")
   }
}
const plane = new Person("fast", "high", "backwards");
console.log(plane);


class postalWorker{
    constructor(rip,seal,carry,cry){
    this.rip=rip
    this.seal=seal
    this.carry=carry
    this.cry =cry
    } 
    newMethod(){
        console.log(); 
    }
}
    const servant = new postalWorker("ouch","lick","heavy","twice a day");
    console.log(servant);

     class Chef{
        constructor(bake,cook,mix,dance){
            this.bake=bake
            this.cook=cook
            this.mix=mix
            this.dance=dance
        }
        newMethod2(){
            console.log("foooood");
        }
     }
    
       
        


    




