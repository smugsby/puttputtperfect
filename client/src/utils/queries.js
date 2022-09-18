import{gql} from "@apollo/client";
export const refreshUser = gql`
query currentUser {
    currentUser{
        _id
        email
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