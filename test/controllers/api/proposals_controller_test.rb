require 'test_helper'

class Api::ProposalsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_proposals_create_url
    assert_response :success
  end

  test "should get update" do
    get api_proposals_update_url
    assert_response :success
  end

end
