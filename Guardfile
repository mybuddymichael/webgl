guard 'coffeescript' do
  watch(%r{.+\.coffee$})
end

guard 'sass', output: 'style' do
  watch(%r{^.+\.scss$})
end

guard 'rocco', :dir => 'doc/' do
  watch('hxr.coffee')
end

guard 'livereload', apply_js_live: false do
  watch(%r{^.+\.(js|css|html|png)$})
end
