import SvgIcon from './components/svg-icon.vue'

const components = [
  SvgIcon
]

export default {
  install: app => {
    components.forEach(component => {
      console.log(component.name)
      app.component(component.name, component)
    })
  }
}