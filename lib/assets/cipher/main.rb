module Cipher

	class Main
		
		attr_reader :language

		def initialize cipher_type='Caesar', language_type='English'
			@language = Language.build language_type
			@cipher = CipherType.build cipher_type, @language
		end

		def encode plaintext, shift
			@cipher.encode plaintext, shift
		end

		def decode plaintext, shift
			@cipher.decode plaintext, shift
		end

		def get_statistic plaintext
			@cipher.get_statistic plaintext
		end

		def guess_shift statistic
			@cipher.guess_shift statistic
		end
	end

end
