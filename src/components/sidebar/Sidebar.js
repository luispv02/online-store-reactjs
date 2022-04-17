import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../../actions/sidebar'
import Menu from './Menu'


const Sidebar = () => {

  const dispatch = useDispatch()
  const {showSidebar} = useSelector(state => state.sidebar);

  const handleHideSidebar = () => {
    dispatch(closeSidebar())
  }

  return (

        <div className={showSidebar ?  'sidebar__content show-sidebar' : 'sidebar__content'}>
            <div className="sidebar__content__user">
                <i 
                  className="far fa-user"
                  
                ></i> 
                <span>Welcome </span>
            </div>

            <div className="sidebar__content__arrow">
              <i 
                className="fas fa-arrow-alt-circle-left"
                onClick={handleHideSidebar}
              ></i>
            </div>

            <div className="sidebar__content__menu">
                <Menu />
            </div>
        </div>

  )
}

export default Sidebar