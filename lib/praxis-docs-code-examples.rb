require "praxis-docs-code-examples/version"

module Praxis
  class DocsCodeExamples < ::Praxis::Plugin
    include Singleton
    def setup!
      puts "Registering"
      register_doc_browser_plugin File.join(File.dirname(__FILE__), 'api_browser')
    end

    def config_key
      :docs_code_examples
    end
  end
end
