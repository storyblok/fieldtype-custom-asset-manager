const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `<div>
<a class="uk-button uk-width-1-1" @click.prevent="openModal" v-if="!open">
  Select asset
</a>
<div v-if="open">
<a class="uk-button uk-width-1-1" @click.prevent="closeModal">
  Close
</a>
<iframe :src="iframeSrc" class="uk-width-1-1 uk-height-1-1" style="min-height: 600px">
</iframe>
</div>
</div>`,
  data() {
    return {
      open: false
    }
  },
  methods: {
    initWith() {
      return {
        plugin: 'sb-asset-manager-demo',
        image: '',
        iframeSrc: ''
      }
    },
    openModal() {
      this.open = true
      this.$emit('toggle-modal', true)
    },
    closeModal() {
      this.open = false
      this.$emit('toggle-modal', false)
    },
    pluginCreated() {
      this.iframeSrc = 'https://YOUR_ASSET_MANAGER_URL?apikey=' + this.options.apiKey
    }
  },
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  }
}