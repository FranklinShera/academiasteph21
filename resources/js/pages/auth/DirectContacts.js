import React, {useEffect,useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {useHistory} from 'react-router'

import axios from 'axios'

import AdminLayout from '../../components/auth/AdminLayout'


//actions
import {  logoutUser } from '../../actions/AuthUserActions'
import Message from "../../components/Message";
import DotLoader from "../../components/DotLoader";



const DirectContacts = () => {

    axios.defaults.withCredentials = true;

    const hist = useHistory();
    const dispatch = useDispatch()

    const authUser = useSelector( state => state.authUser)
    const { loggedInUser, auth } = authUser;


    const[newMsg,setNewMsg] = useState("")
    const[loading,setLoading] = useState(true)

    const[contacts,setContacts] = useState([])



    const fetchContacts = (contactsUrl = '/api/auth/admin/direct-contacts') =>{
        setLoading(true)
        axios.get(contactsUrl)
            .then(res =>{
                if(res.status == 200){

                    setContacts(res.data)

                }else{
                    console.log(res)
                }

            })
            .catch(err =>{
                console.log(err)
            })

        setLoading(false)
    }



    const openConversation = (contactersation) =>{

        const clientName = contactersation.client.name.trim().replace(/[^a-zA-Z ]/g, " ").replace(/\s/g, '-').toLowerCase();

        hist.push(`/in/dashboard/contactersation/${contactersation.id}/${clientName}`);

    }




    useEffect(() => {

        if(!auth){
            hist.push("/in")
        }

        window.scrollTo(0,0)

        document.querySelector('title').text = 'AcademiaSteph21 | Direct Contacts'

        fetchContacts()

    }, [auth])







    return (
        <div className="dashboard">
            <AdminLayout>
             <div className="dash_overview">
                 <div className="messages">


                     <div className="second-nav">
                         <h1 className="lead-title inline">DIRECT CONTACTS</h1>


                         <div className="second-nav-controls">

                            <span className={ (contacts.links?.prev) ? "p-2 cursor-pointer" : "p-2 text-gray-400"}
                                  onClick={e => {
                                      e.preventDefault()
                                      fetchContacts(links.prev)
                                  }}>
                                <i className="ti-angle-left"></i>PREV
                            </span>
                             <span className={ (contacts.links?.next) ? "p-2 cursor-pointer ml-4" : "p-2 text-gray-400 ml-4"}
                                   onClick={e => {
                                       e.preventDefault()
                                       fetchContacts(links.next)
                                   }}>NEXT
                                <i className="ti-angle-right"></i>
                            </span>
                         </div>
                     </div>

                     <div className="messages-list">


                         {(contacts.length != 0 && !loading ) && contacts.data.map((contact , index) => (
                             <div className="single-msg" onClick={e => {
                                 e.preventDefault();
                             }}>
                                 <div className="msg-client">
                                     { index+1+". "} {contact.name}
                                 </div>
                                 <div className="message-content">
                                     {contact.whatsappnumber}
                                 </div>
                                 <div className="msg-time">
                                     {contact.email}
                                 </div>
                             </div>
                         ) )}

                         {loading && <DotLoader/>}

                         {(contacts.length == 0  && !loading) && <>
                             <div className="no-messages">
                                 <h3>You Don't Have Contacts!</h3>
                             </div>
                         </> }
                     </div>
                 </div>
             </div>
            </AdminLayout>
        </div>
    )
}

export default DirectContacts;
