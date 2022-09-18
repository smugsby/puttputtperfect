import { gql } from "@apollo/client";
export const login = gql`
mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
    token
    user {
        _id
        username
        }
    }
}
`;

export const add_user = gql`
mutation addUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
} 
`;

export const addRound = gql`
mutation addRound($puttsMade: String, $firstIn: Boolean, $lastIn: Boolean, $allMade: Boolean, $roundId: String) {
    addRound (puttsMade: $puttsMade, firstIn: $firstIn, lastIn: $lastIn, allMade: $allMade, roundId: $roundId) {
    username
    savedRounds {
        puttsMade
        firstIn
        lastIn
        allMade
        roundId
        }
    }
} 
`;
export const deleteRound = gql`
mutation deleteRound($roundId: String) {
    deleteRound (roundId: $roundId) {
        username
        savedRounds {
            puttsMade
            firstIn
            lastIn
            allMade
            roundId
        }
    }
} 
`;
