
var score;
function studentGrader(score){
    
    // let decision;
    if (score>=90){
        console.log("Grade A");
    }
    else if(score>80 && score<90){
        console.log("Grade B");
    }
    else if(score>70 && score<=80){
        console.log("Grade C");
    }
    else if(score>60 && score<=70){

        console.log("Grade D");
    }
    else if(score>50 && score<=60){
        console.log("Grade E");
    }
    else if(score>=0 && score<=50){
        console.log("Grade F");
    }
    else{
        console.log ("Not defined");
    }
    // return decision;

 

    // git add .
    // git commit -m "commit message"
    // git push -u origin master

    // git -help
    // git status

}

studentGrader(70);