const getImagePath = (name) => {
    const glob = import.meta.glob('~/assets/src/img/*', {eager: true})
    const getImageAbsolutePath = imageName => glob[`/assets/src/img/${imageName}`]['default']
    return getImageAbsolutePath(name)
}
const getImagePaths = (names = []) => {
    const glob = import.meta.glob('~/assets/src/img/*', {eager: true})
    const getImageAbsolutePaths = imageNames => imageNames.map(imageName => glob[`/assets/src/img/${imageName}`]['default'])
    return getImageAbsolutePaths(names)
}

export {getImagePath, getImagePaths}
