export default () => {
    const device_token = useCookie('device_token')
      if (!device_token.value) {
        const stringSpace =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const stringLength = stringSpace.length
        let randomString = ''
        for (let i = 0; i < 64; i++) {
          randomString =
            randomString + stringSpace[Math.floor(Math.random() * stringLength)]
        }
        console.log(randomString)
        useCookie('device_token').value = randomString
      }
    }