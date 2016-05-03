# require_relative '../statistic'
module Cipher
	
	class Caesar

		include Statistic

		def initialize language
			@alphabet = language.alphabet.to_a
			@frequent = language.frequent
		end

		def encode plaintext, shift
			rotated_alphabet = Hash[@alphabet.zip(@alphabet.rotate(shift.abs))]
			answer = swap_chars(plaintext, rotated_alphabet)
	 		answer.join
		end

		def decode plaintext, shift
			rotated_alphabet = Hash[@alphabet.zip(@alphabet.rotate(-shift.abs))]
			answer = swap_chars(plaintext, rotated_alphabet)
			answer.join
		end

		def guess_shift statistic
			q = statistic.sort_by{| _, val| -val}
			q.first[0].ord - @frequent.ord
		end
		
		private

		def swap_chars plaintext, rotated_alphabet
			plaintext.chars.map do |char| 
				if @alphabet.include? char
					rotated_alphabet[char]
				elsif @alphabet.include? char.downcase
					rotated_alphabet[char.downcase].upcase
				else
					char
				end
			end
		end
	end

end