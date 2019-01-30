import { combineReducers } from 'redux';
import MembersReducers from './MembersReducers'
import MemberDetailReducers from './MemberDetailReducers';
import ProposalsReducers from './ProposalsReducers'
import ProposalDetailReducers from './ProposalDetailReducers'
import VotesReducers from './VotesReducers'

export default combineReducers({
    members: MembersReducers,
    memberDetail: MemberDetailReducers,
    proposals: ProposalsReducers,
    proposalDetail: ProposalDetailReducers,
    votes: VotesReducers
});