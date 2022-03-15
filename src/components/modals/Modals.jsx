import React from 'react'
import { AppContext } from '../../Context/AppProvider'
import AddMemberModal from './AddMemberModal'
import AddRoomModal from './AddRoomModal'

export default function Modals() {
    const {visible,visibleMember} = React.useContext(AppContext)
   
  return (
    <div >
        {visible?<AddRoomModal ></AddRoomModal>:visibleMember?<AddMemberModal></AddMemberModal>:null
        }
    </div>
  )
}
