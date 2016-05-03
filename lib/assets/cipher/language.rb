module Cipher
	
	Language = Struct.new(:alphabet, :frequent) do

		def self.build language
			case language
			when 'English'
				Language.new('a'..'z', 'e')
			end
		end

	end

end