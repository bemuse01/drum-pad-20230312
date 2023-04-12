const getImagePath = (name) => {
    const glob = import.meta.glob('~/assets/src/img/*', {eager: true})
    const getImageAbsolutePath = imageName => glob[`/assets/src/img/${imageName}`]['default']
    return getImageAbsolutePath(name)
}
const getImagePaths = (names = []) => {
    const glob = import.meta.glob('~/assets/src/img/*', {eager: true})
    console.log(typeof glob)
    const getImageAbsolutePaths = imageNames => imageNames.map(imageName => glob[`/assets/src/img/${imageName}`]['default'])
    return getImageAbsolutePaths(names)
}
const getInstThumbPaths = () => {
    const glob = import.meta.glob('~/assets/src/img/instThumb/*', {eager: true})
    return glob
}
const getInstPath = (kind) => {
    switch (kind) {
        case 'hiphop':
            return import.meta.glob('~/assets/src/sound/hiphop/*', {eager: true})

        case 'jazz':
            return import.meta.glob('~/assets/src/sound/jazz/*', {eager: true})

        case 'percussion':
            return import.meta.glob('~/assets/src/sound/percussion/*', {eager: true})

        case 'rock':
            return import.meta.glob('~/assets/src/sound/rock/*', {eager: true})

        default:
            break
    }
}

export {getImagePath, getImagePaths, getInstThumbPaths}
