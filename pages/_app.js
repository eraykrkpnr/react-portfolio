function MyApp({ Component, pageProps }) {
  return (
    <div className="dark font-justAnother">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
