
// import { album } from './albumList'
import './gallery.css'

let album = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1685460939882-da7c7cb6f3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1676899099128-d1147f7b68d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1686818360329-2aa066bf7565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1686817255092-e1dc27e8ff23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1686605053487-914dcf0389d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 7,
    src: 'https://plus.unsplash.com/premium_photo-1673676884428-ad8c7271c16e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1686701887981-d699ae7e392c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1683009427051-00a2fe827a2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1686577184205-6d4b36cde0d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1686598997804-71e849721105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1682687221248-3116ba6ab483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1685900337612-0f548bd9b3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1686695324533-8bb24373ff47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1686670179902-10fd23ce71a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=722&q=80'
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1686224613485-e7e6bf895985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
]


const Gallery = () => {
  return (
    <>
      <div className='gallery'>
        {
          album.map((img, i) => {
            return (
              <div className='picture' key={i}>
                <img className='rounded-xl' src={img.src} style={{ width: '100%' }} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Gallery