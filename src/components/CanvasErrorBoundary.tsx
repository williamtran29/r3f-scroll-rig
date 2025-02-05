// @ts-nocheck
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

interface ICanvasErrorBoundary {
  children: ReactNode
  onError: () => void
}

export class CanvasErrorBoundary extends React.Component<{}, ICanvasErrorBoundary> {
  constructor(props) {
    super(props)
    this.state = { error: false }
    this.props = props
  }

  static propTypes = {
    onError: PropTypes.func,
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   // logErrorToMyService(error, errorInfo)
  // }

  render() {
    if (this.state.error) {
      this.props.onError && this.props.onError(this.state.error)
      return null
    }

    return this.props.children
  }
}
