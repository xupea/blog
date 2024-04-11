interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Electron DevTools Installer',
    description: `Electron 应用中调试React Vue Redux 插件`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.npmjs.com/package/electron-devtools-assembler',
  },
  {
    title: 'Stateful Electron-window',
    description: `有记忆的Electron主窗口`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://www.npmjs.com/package/stateful-electron-window',
  },
  {
    title: 'Clean CSDN Blog',
    description: `去除广告的 CSDN Blog - Chrome 插件`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://chromewebstore.google.com/detail/clean-csdn-blog/pihbmjdkfcdbdpdpjjaamnbafcmfoald',
  },
]

export default projectsData
