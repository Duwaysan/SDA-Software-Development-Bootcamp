


class Game :
############# Variables #############
    board = {
    'a1': ' ', 'b1': ' ', 'c1': ' ',
    'a2': ' ', 'b2': ' ', 'c2': ' ',
    'a3': ' ', 'b3': ' ', 'c3': ' ',
    }
    turn = 'X' # X always start
    tie = False
    winner = None
    player1 = {'name':None,
                'score':0,
                'shape':None}
    player2 = {'name':None, ###shape => X or O
                'score':0,
                'shape':None}
    
############# Functions #############
    def __init__(self):
        self.board = {   'a1': ' ', 'b1': ' ', 'c1': ' ',
                    'a2': ' ', 'b2': ' ', 'c2': ' ',
                    'a3': ' ', 'b3': ' ', 'c3': ' ',}
        self.turn = 'X' # X always start
        self.tie = False
        self.winner = None
        self.switch_shape = {'X':'O',
                        'O':'X'}
        pass
    def reset(self):
        self.board = {
          'a1': ' ', 'b1': ' ', 'c1': ' ',
          'a2': ' ', 'b2': ' ', 'c2': ' ',
          'a3': ' ', 'b3': ' ', 'c3': ' ',
        }
        self.tie = False
        self.winner = None
    
    def read_info(self):
        if not self.player1['score'] and not self.player2['score']:
            self.player1['name'] = input("- Enter Player 1 Name (X): ")
            self.player1['shape'] = "X"
            self.player2['name'] = input("- Enter Player 2 Name (O): ")
            self.player2['shape'] = "O"
                
    def display(self):
        print(f"""
               A   B   C
           1)  {self.board['a1'] or ' '} | {self.board['b1'] or ' '} | {self.board['c1'] or ' '}
               ----------
           2)  {self.board['a2'] or ' '} | {self.board['b2'] or ' '} | {self.board['c2'] or ' '}
               ----------
           3)  {self.board['a3'] or ' '} | {self.board['b3'] or ' '} | {self.board['c3'] or ' '}
         """)
        pass
                

    def move(self):
        board = self.board
        turn = self.turn
        switch_shape = {
        'X':'O',
        'O':'X'
    }
        move = input(f"Player {turn} Enter Coordinate (ex: a1, c3): ").lower()
        while move not in board.keys() or not board[move] == ' ':
            print('Incorrect Coordinate LOOK AT THE BOARD!!!')
            move = input(f"Player {turn} Enter Coordinate (ex: a1)").lower()
        board[move] = turn
        self.turn = switch_shape[turn]


    def check_winner(self):
        wins = [['a1','b1','c1'],##
                ['a2','b2','c2'],# Horizontally
                ['a3','b3','c3'],##
                ['a1','a2','a3'],##
                ['b1','b2','b3'],# Vertically
                ['c1','c2','c3'],##
                ['a1','b2','c3'],## 
                ['a3','b2','c1']]## Diagonally
        
        for win in wins:
            if self.board[win[0]]+self.board[win[1]]+self.board[win[2]] == "OOO":
                # self.winner = "O"
                if self.player1['shape'] == 'O':
                    self.player1['score'] += 1
                    self.winner = self.player1['name']
                else:
                    self.player2['score'] += 1
                    self.winner = self.player2['name']

            elif self.board[win[0]]+self.board[win[1]]+self.board[win[2]] == "XXX":
                # self.winner = "X"
                if self.player1['shape'] == 'X':
                    self.player1['score'] += 1
                    self.winner = self.player1['name']
                else:
                    self.player2['score'] += 1
                    self.winner = self.player2['name']
        pass

    
    def print_winner(self,spaces):
        print("----------------- Score -----------------")
        print(f"\t{self.player1['name']}: {self.player1['score']}    ---       {self.player2['name']}: {self.player2['score']}")

        if self.winner:
            print(f"Winner is {self.winner} CONGRATZ!!!")
            return
        if not spaces:
            print("TIE, GET BETTER LOSERS!!!!!")
            self.tie =True
        
    def play_game(self):
        empty_space = 9 # 8 because it will check after 8 and stop after 9
        print('######## WELCOME TO TIC-TAC-TOE ########')
        self.read_info()
        
        self.display()
        while(empty_space and not self.winner):

            self.move()
            self.display()
            empty_space -= 1
            self.check_winner()
        self.print_winner(empty_space)
        self.__init__()
        
choice = 'no'

    

while(choice != 'yes'):
    instance = Game()
    # instance.read_info()
    instance.play_game()
    choice = input("##### are you tired? want to exit ? (Yes/No): ").lower()