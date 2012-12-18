group :development do

  guard 'haml', :output => '.' do
    watch %r{^demo/.+(\.html\.haml)}
  end

  guard :coffeescript, :output => '.', :bare => true do
    watch(%r{src/(.+\.coffee)})
  end

  guard :sass, :input => 'src', :output => '.'
  guard :sass, :input => 'demo', :output => 'demo'
end