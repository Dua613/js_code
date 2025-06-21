//----------TWO TYPES OF MEMORY--------------

// 1.Stack (Primitive datatypes comes in it)     2.Heap (Non Primitive/Reference datatypes comes in it)
  // this gives a copy                              this gives reference (original value)
  // changes become in a copy                       changes become in original 


  //**************STACK**************** */
  let myYoutubename = "shari.com"

  let anothername = myYoutubename
  anothername = "shari baluch"

 console.log(myYoutubename);
 console.log(anothername);

 //*******************HEAP******************** */
   let userOne = {
        email: "user@google.com",
          upi: "user@ybl"
         }

   let userTwo = userOne
   userTwo.email = "shari@google.com"

     console.log(userOne.email);
     console.log(userTwo.email);
