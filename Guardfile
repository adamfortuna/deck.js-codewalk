# A sample Guardfile
# More info at https://github.com/guard/guard#readme
require 'sprockets'

env = Sprockets::Environment.new
env.append_path('.')
env.append_path('demo/')

guard 'sprockets2', :sprockets => env, :digest => false, :assets_path => '.', :gz => false, :precompile => [ /\w+\.(?!js|css).+/, /deck.codewalk.(css|js)$/ ] do
  watch(%r{^.+$})
  watch(%r{^demo/.+$})
end

guard 'haml', :output => 'www', :input => 'demo' do
  watch(/^.+(\.html\.haml)/)
end