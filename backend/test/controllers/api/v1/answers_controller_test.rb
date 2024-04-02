require "test_helper"

class Api::V1::AnswersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_answers_create_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_answers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_answers_destroy_url
    assert_response :success
  end
end
