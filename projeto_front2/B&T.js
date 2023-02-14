function temp(){
    let op1 = document.getElementById("op1").value;
    let op2 = document.getElementById("op2").value;
    let op3 = document.getElementById("op3").value;
    let caltemp = document.getElementById("caltemp");
    
    if(op1==="P" && op2==="CURTO"&& op3==="BANHO"){caltemp.value = "40 MIN" };
    if(op1==="M" && op2==="CURTO"&& op3==="BANHO"){caltemp.value = "40 MIN" };
    if(op1==="G" && op2==="CURTO"&& op3==="BANHO"){caltemp.value = "1 HORA" };
    if(op1==="P" && op2==="LONGO"&& op3==="BANHO"){caltemp.value = "1 HORA" };
    if(op1==="M" && op2==="LONGO"&& op3==="BANHO"){caltemp.value = "1 HORA" };
    if(op1==="G"&& op2==="LONGO" && op3==="BANHO"){caltemp.value = " 1 HORA E 30 MIN" };
    if(op1==="P" && op3==="TOSA"){caltemp.value = "2 HORAS" };
    if(op1==="M" && op3==="TOSA"){caltemp.value = "2 HORAS E 30 MIN" };
    if(op1==="G" && op3==="TOSA"){caltemp.value = "3 HORAS" };

    
    
}
function valor(){
    let op1 = document.getElementById("op1").value;
    let op2 = document.getElementById("op2").value;
    let op3 = document.getElementById("op3").value;
    let valor = document.getElementById("valor");

    if(op1==="P" && op2==="CURTO"&& op3==="BANHO"){valor.value = "50,00 REAIS" };
    if(op1==="M" && op2==="CURTO"&& op3==="BANHO"){valor.value = "55,00 REAIS" };
    if(op1==="G" && op2==="CURTO"&& op3==="BANHO"){valor.value = "65,00 REAIS" };
    if(op1==="P" && op2==="LONGO"&& op3==="BANHO"){valor.value = "55,00 REAIS" };
    if(op1==="M" && op2==="LONGO"&& op3==="BANHO"){valor.value = "60,00 REAIS" };
    if(op1==="G"&& op2==="LONGO" && op3==="BANHO"){valor.value = "80,00 REAIS" };
    if(op1==="P" && op3==="TOSA"){valor.value = "100,00 REAIS" };
    if(op1==="M" && op3==="TOSA"){valor.value = "130,00 REAIS" };
    if(op1==="G" && op3==="TOSA"){valor.value = "170,00 REAIS" };
    
}

