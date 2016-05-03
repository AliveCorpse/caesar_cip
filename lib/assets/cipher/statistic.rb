module Cipher

	module Statistic

		def get_statistic plaintext

			statistic = Hash[@alphabet.zip(Array.new(@alphabet.to_a.size, 0))]
			
			plaintext.chars.inject(statistic) do |stat, char|
				stat[char.downcase] += 1 if stat.key?(char)
				stat
			end

		end

	end

end
