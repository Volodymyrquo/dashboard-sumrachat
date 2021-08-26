import avatar from '../../assets/images/Avatars.png'
import clip from '../../assets/images/Clip-content.png'
import smile from '../../assets/images/Smile.png'
import flowerpot1 from '../../assets/images/Mask-Group-1.png'
import flowerpot2 from '../../assets/images/Mask-Group-2.png'

const ChatsMessages = () => {
  return (
    <div className='sch-chats-messages'>
      <div className='sch-chats-messages-contact'>
        <div className='sch-chats-messages-contact-avatar'></div>
        <div className='sch-chats-messages-block'>
          <div className='sch-chats-messages-contact-message'>
            <span>Hi,How are things with our platform builder?</span>
          </div>
          <span className='sch-chats-messages-block-time'>8:30</span>
          <div className='sch-chats-messages-contact-message'>
            <span>
              I found out that Daniel has completed her part of the work and is
              waiting for your review.
            </span>
          </div>
          <span className='sch-chats-messages-block-time'>8:30</span>
          <div className='sch-chats-messages-contact-message'>
            <img src={flowerpot1} alt='flowerpot1' />
            <img src={flowerpot2} alt='flowerpot2' />
          </div>
          <span className='sch-chats-messages-block-time'>8:30</span>
        </div>
      </div>
      <div className='sch-chats-messages-user'>
        <div className='sch-chats-messages-user-message'>
          <span>
            I found out that Daniel has completed her part of the work and is
            waiting for your review.
          </span>
        </div>

        <div className='sch-chats-messages-user-avatar'></div>
      </div>
      <div className='sch-chats-messages-input'>
        <img
          src={avatar}
          alt='avatar'
          className='sch-chats-messages-input-avatar'
        />
        <input type='text' placeholder='Write your message...' />
        <img
          src={smile}
          alt='smile'
          className='sch-chats-messages-input-smile'
        />
        <img src={clip} alt='clip' className='sch-chats-messages-input-clip' />
      </div>
    </div>
  )
}

export default ChatsMessages
