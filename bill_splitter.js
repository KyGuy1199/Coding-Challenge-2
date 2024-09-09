// Task 1: Calculate The Tip

//Calculate tip based on bill either 0.15 or 0.20
    let tip = (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.20;
    return tip; //assigned result to variable name tip
  }

  //Task 2: Output Details

  function BillTotal(bill, tip) {
    let total = (bill + tip)
    return total  //function to find total for message
  }
 function BillMessage(bill, tip, total)
     console.log('The bill was ${bill}, the tip was ${tip}, and the total value is ${total}')

     //Task 3: Create a Function

function calculateTip(bill)
    let tip = (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.20;
    return tip; // return value
    calculateTip("100")

    //Task 4: Utilize Arrays

    //Array of bills
    let bills_1 = ["275","40","430"]
    let bills_2 = ["125", "555", "44"]

    let tip_1 = bills_1.map(calculateTip)
    let tips_2 = bills_2.map(calculateTip) //calculate tips based off of array

    let total_1 = (tip_1 += bills_1)
    let total_2 = (tips_2 += bills_2)
    

    

