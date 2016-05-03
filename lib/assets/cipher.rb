
module Cipher
	RELEASE = '0'
	MIDDLE = '0'
	MINOR = '1'
	
	def self.version
		[RELEASE, MIDDLE, MINOR].join('.')
	end
end