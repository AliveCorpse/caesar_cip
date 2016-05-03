class CipherController < ApplicationController
	include Cipher
	
	before_action :init_cipher, only: [ :encode, :decode, :get_statistic ]

	def encode
		result = @cipher.encode(post_params[:plaintext], post_params[:shift])
		respond = {result: result}
		respond_with respond, location: encode_path
	end

	def decode
		result = @cipher.decode(post_params[:plaintext], post_params[:shift])
		respond = {result: result}
		respond_with respond, location: root_path
	end

	def get_statistic
		stat = @cipher.get_statistic(params[:plaintext])
		guess_shift = @cipher.guess_shift(stat)
		respond = {stat: stat, guess_shift: guess_shift}
		respond_with respond, location: root_path
	end

	
	private

	def post_params
		params.require(:cipher).permit(:plaintext, :shift)
	end

	def init_cipher
		@cipher = Cipher::Main.new
	end
end
