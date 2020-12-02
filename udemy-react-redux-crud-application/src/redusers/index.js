import { combineRedusers} from 'redux'
import count from './count'

export default combineRedusers({ count })