import {useState} from 'react'
import './index.css'

const ShowHistoryItems = props => {
  const {historyIt} = props
  const [inputval, setInputVal] = useState('')
  const [historyItem, sethistoryItem] = useState(historyIt)

  //   useEffect(() => {
  //     const filteredlist = historyItem.filter(each =>
  //       each.title.toLowerCase().includes(inputval.toLowerCase()),
  //     )
  //     sethistoryItem(filteredlist)
  //   }, [inputval])

  const handleChange = e => {
    const val = e.target.value
    setInputVal(val)
  }
  const onSearch = val => {
    setInputVal(val)
  }
  const handleDel = id => {
    const listUp = historyItem.filter(each => each.id !== id)
    sethistoryItem(listUp)
  }

  const filterdHistory = historyItem.filter(each => {
    const valInput = inputval.toLowerCase()
    const loweringeach = each.title.toLowerCase()
    return loweringeach.startsWith(valInput) && loweringeach !== valInput
  })

  return (
    <div className="bg-container">
      <header className="bg-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
          alt="app logo"
        />
        <div className="bg-search">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          <input
            type="search"
            className="search-input"
            onChange={handleChange}
            value={inputval}
          />
        </div>
      </header>
      {filterdHistory.length === 0 ? (
        <p>There is no history to show</p>
      ) : (
        filterdHistory.map(each => (
          <ul className="list-item" key={each.id}>
            <li onClick={() => onSearch(each.title)} className="itm-time">
              <p> {each.timeAccessed}</p>
            </li>
            <li className="itm-logo">
              <img src={each.logoUrl} alt="domain logo" />
            </li>
            <li className="itm-title">
              <p>{each.title}</p>
            </li>
            <li className="itm-web">
              <p>{each.domainUrl}</p>
            </li>
            <li className="itm-del">
              <button
                type="button"
                data-testid="delete"
                onClick={() => handleDel(each.id)}
              >
                <img
                  className="del-icon"
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
                  alt="delete"
                />
              </button>
            </li>
          </ul>
        ))
      )}
    </div>
  )
}
export default ShowHistoryItems
