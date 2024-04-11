# connect4_gui_alphazero  
connect4 website based on Alphazero from Scratch by freeCodeCamp  

GUI based on the youtube below:  
https://www.youtube.com/watch?v=4ARsthVnCTg  
https://github.com/ImKennyYip/Connect4  

And code is updated from connect4_gui_my_version  
https://github.com/cwd0075/connect4_gui_my_version  

While connect4 javascript logic is convert from python using codeconvert.ai   
Alphazero from Scratch by freeCodeCamp   
https://github.com/cwd0075/alphazero_connect4/blob/main/connect4_part1.py  

To run:   
just run index.html on a local web server  
I run on Cursor.sh Live Server locally (see Note: Setup javascript development environment on Windows)    

code update:  
update connect4.js  
update get_next_state  
update get_valid_moves  
update check_win  

### MCTS Folder:  
Connect 4, human play againts MCTS AI  
MCTS Module code is from:  
tictactoe_gui/mcts/mcts_module.js  

Code modification from human vs human version:  
update connect4_module.js, copy the changes in connect4_gui_my_version/mcts/connect4_module.js  
update connect4.js, copy the changes in connect4_gui_my_version/mcts/connect4.js  

### Why it run faster than connect4_gui_my_version:  
checkwin function is different   
smaller valid moves arrary, mine is 42, here is 7   

### AlphaMCTS_Onnx Folder:  
Connect4, human play against MCTS with AlphaZero ML network in Onnx format  

code update from MCTS Folder  

code modification based on:  
https://github.com/cwd0075/tictactoe_gui/blob/main/AlphaMCTS_Onnx/mcts_module.js,   
update the flattenstate to [1, 3, 6, 7], update the session output name to 222 and 228    
https://github.com/cwd0075/tictactoe_gui/blob/main/AlphaMCTS_Onnx/tictactoe_module.js,   
add get_encoded_state(), softmax(), flatten3DArray()    
https://github.com/cwd0075/tictactoe_gui/blob/main/AlphaMCTS_Onnx/script.js  
https://github.com/cwd0075/alphazero_connect4/blob/main/onnx_test.js  

### Why we still need to do MCTS search steps at model inference, even we have trained a policy network model?  
Need to do MCTS search even there is ML model to predict the action probability, as the probability is not always suggesting correct action.  
We need MCTS search to help us to confirm the correct action to take. The probability in policy model is not totally accurate sometimes.  

 
