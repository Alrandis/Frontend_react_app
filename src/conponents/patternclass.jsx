import classNames from 'classnames'
function name(props) {
   return(
       <div>className={classNames('menu',props.className, {'hh--jj': this.props.jj,})}</div> 
   )
}
