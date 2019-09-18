 var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = floatAge * 365.25;
     floatMonths = floatAge * 12;
     intWeeks = floatDays / 7;
     intFortnights = floatDays / 14;
     alert("Age in months= " + floatMonths + "\nAge in days= " + floatDays + "\nAge in weeks= " + intWeeks + "\nAge in Fortnights= " + intFortnights);
