# Praxis Docs Code Examples

This is a Praxis Plugin that adds code examples to the Praxis Docs Browser. Why
should you use it? Let's talk about a few reasons you probably shouldn't use it:

- Praxis currently doesn't have a way to describe an authentication mechanism for
  the supported APIs. So if your API is authenticated, the examples won't actually work.
- The code generators don't necessarily (yet!) take into consideration everything
  that can be expressed with the the Praxis design language and may fall
  over. I recommend reviewing each example before publishing the generated code
  examples to clients.
- The examples are fairly uninteresting uses of the API. A handwritten example of
  doing something actually interesting with your API might be more interesting for
  the reader.

That being said, this repo can serve as a good starting point for writing your own
code generators for the Praxis doc browser.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'praxis-docs-code-examples'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install praxis-docs-code-examples

## Usage

Add `application.bootloader.use Praxis::DocsCodeExamples` to your Praxis bootloader.

## Development

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rightsale/praxis-docs-code-examples.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
