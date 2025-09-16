votes = {
    "los angeles": {
        "elon musk": 2,
        "bernie sanders": 3,
        "hillary clinton": 2
    },
    "dallas": {
        "elon musk": 4,
        "donald trump": 1,
        "bernie sanders": 5,
        "hillary clinton": 1,
        "bill clinton": 1
    },
    "boston": {
        "elon musk": 1,
        "donald trump": 5,
        "hillary clinton": 3,
        "bill clinton": 6
    }
}
candidates = {
        "elon musk": {"votes":0,
                        'winner': False},

        "donald trump": {'votes':0,
                        'winner': False},

        "hillary clinton": {'votes':0,
                        'winner': False},

        "bill clinton": {'votes':0,
                        'winner': False},
        "bernie sanders": {'votes':0,
                        'winner': False}
}

for person in votes.values(): 
    for key,values in person.items():
        candidates[key]['votes'] += person[key]

highest =0
# candidates
for person, info in candidates.items():

    if info['votes'] > highest:
        highest = info['votes']

for person, info in candidates.items():
    if info['votes'] == highest:
        info['winner'] = True

print(candidates)