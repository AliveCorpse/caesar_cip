module Cipher
	
	class CipherType

		def self.build cipher_type, language
			require_relative "cipher_types/#{cipher_type}"
			Cipher.const_get(cipher_type).new language
		end

	end

end