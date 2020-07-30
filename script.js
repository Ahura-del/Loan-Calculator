let amount = document.querySelector("#amount");
let interest = document.querySelector("#interest");
let month = document.querySelector("#year");
let calbtn = document.querySelector("#calculate");
let rest = document.querySelector("#rest");
let paymonth = document.querySelector("#paymonth");
let totlapay = document.querySelector("#totalpay");
let payiterest = document.querySelector("#payiterest");

loadEvents();



function loadEvents(){
    calbtn.addEventListener("click" , (e)=>{
        e.preventDefault();
        let intamount = parseFloat(amount.value);
        let intinterest = parseFloat(interest.value);
        let intmonth = parseFloat(month.value)* 12;
        let profit = (intamount * intinterest * (intmonth + 1)) / 2400;
        let payment = (profit + intamount) / (intmonth);
        if(isFinite(intamount && intinterest && intmonth)){
            paymonth.value = payment.toFixed(2);
            totlapay.value = (profit + intamount).toFixed(2) ; 
            payiterest.value = profit.toFixed(2);
            document.querySelector(".resault").style.display = 'block'
            document.querySelector('.loading-area').style.display = 'block';
            document.querySelector(".form-resault").style.display = 'none';
            setTimeout(()=>{
                document.querySelector('.loading-area').style.display = 'none';
                document.querySelector(".form-resault").style.display = 'block';
            } , 2000)
        }else{
            showErorr("Please Check The Numbers ...")
            document.querySelector(".resault").style.display = "none"
        }
        amount.value = "";
        interest.value = "";
        month.value = "";
    })


    rest.addEventListener("click" , (e)=>{
        e.preventDefault();
        paymonth.value = "";
        totlapay.value = "";
        payiterest.value = "";

        document.querySelector(".resault").style.display = "none"
      
    })
 
}

function showErorr(erorr){
    let div = document.createElement("div");
    div.className = "alert alert-danger text-center";
    div.textContent = erorr;
    document.querySelector(".erorr-area").appendChild(div)

    setTimeout( ()=>{
            div.remove()   
    }, 1000)
}