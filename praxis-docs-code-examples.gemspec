# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'praxis-docs-code-examples/version'

Gem::Specification.new do |spec|
  spec.name          = "praxis-docs-code-examples"
  spec.version       = PraxisDocsCodeExamples::VERSION
  spec.authors       = ["Jakub Hampl"]
  spec.email         = ["honitom@seznam.cz"]

  spec.summary       = %q{Code examples for the Praxis Docs Browser }
  spec.homepage      = "https://github.com/rightscale/praxis-docs-code-examples"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.10"
  spec.add_development_dependency "rake", "~> 10.0"
end
