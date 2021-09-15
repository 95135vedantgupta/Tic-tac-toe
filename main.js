var step;    //step helps to insert alternate o or x
var game_end_or_not;      //game_end_or_not tells wheter game has ended or is still going on
var X=0,O=0;  

var boxes=document.querySelectorAll('.div1');     //boxes is a nodelist of all div1's
var pos=[0,1,2,3,4,5,6,7,8];    //identifies clicked box, if x is on box, pos=1; else pos=0

function game_start(){
    step=1;                        
    game_end_or_not=false;

    document.getElementById('reset').innerHTML='Reset!';
    document.getElementById('whose_turn').innerHTML='It is player <img class="img_btn" src="images/tic_tac_toe_cross.png"> turn';

    pos=[0,1,2,3,4,5,6,7,8];       

    for(var i=0; i<boxes.length;i++)
    {
        boxes[i].innerHTML='';
        boxes[i].addEventListener('click',manager_fun);     //to call the manager function on clicking box/ div1
    }

}

function manager_fun(event){
    if(step%2==1)
    {
        document.getElementById(event.target.id).innerHTML='<img class="img_in_div1" src="images/tic_tac_toe_cross.png">';   //putting img for odd step in grid
        document.getElementById('whose_turn').innerHTML='It is player <img class="img_btn" src="images/tic_tac_toe_zero.png"> turn';  //tellign whose turn
        step++;
        pos[event.target.id]='x';    //putting value='x' in pos nodelist
        who_won('cross');       //another function
    }

    else{
        document.getElementById(event.target.id).innerHTML='<img class="img_in_div1" src="images/tic_tac_toe_zero.png">';   //putting img for odd step in grid
        document.getElementById('whose_turn').innerHTML='It is player <img class="img_btn" src="images/tic_tac_toe_cross.png"> turn';  //tellign whose turn
        step++;
        pos[event.target.id]='o';    //putting value='o' in pos nodelist
        who_won('zero');       //another function
    }
    
}

function who_won(value){
    if((pos[0]===pos[1] && pos[1]===pos[2]) || (pos[0]===pos[4] && pos[4]===pos[8]) || (pos[6]===pos[4] && pos[4]===pos[2]) || (pos[6]===pos[7] && pos[7]===pos[8]) || (pos[0]===pos[3] && pos[3]===pos[6]) || (pos[3]===pos[4] && pos[4]===pos[5]) || (pos[1]===pos[4] && pos[4]===pos[7]) || (pos[2]===pos[5] && pos[5]===pos[8]))
    {
        if(value==='cross'){
            document.getElementById('whose_turn').innerHTML='<img class="img_btn" src="images/tic_tac_toe_cross.png"> WINS! Play Again';
            X++;
            document.getElementById('score1').innerHTML=`<h3>${X}</h3>`;
        }
        else{
            document.getElementById('whose_turn').innerHTML='<img class="img_btn" src="images/tic_tac_toe_zero.png"> WINS! Play Again';
            O++;
            document.getElementById('score2').innerHTML=`<h3>${O}</h3>`;
        }

    for(var i=0;i<boxes.length;i++){
        boxes[i].removeEventListener('click',manager_fun);
    }
    game_end_or_not=true;

    }

    else if(step===10){
        document.getElementById('whose_turn').innerHTML='It is a draw. Play again!';
        game_end_or_not=true;
    }
}

function fun_reset_game(){
    X=0;
    O=0;
    document.getElementById('score1').innerHTML='<h3>0</h3>';
    document.getElementById('score2').innerHTML='<h3>0</h3>';
    game_start();
}

//start calling functions
game_start();

document.getElementById('whose_turn').onclick=()=>{
    if(game_end_or_not){
        game_start();
    }
}

document.getElementById('reset').onclick=()=>{
    fun_reset_game();
}








