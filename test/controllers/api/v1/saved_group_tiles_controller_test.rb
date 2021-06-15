require "test_helper"

class Api::V1::SavedGroupTilesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_saved_group_tiles_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_saved_group_tiles_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_saved_group_tiles_create_url
    assert_response :success
  end
end
