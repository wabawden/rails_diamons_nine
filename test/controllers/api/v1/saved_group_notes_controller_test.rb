require "test_helper"

class Api::V1::SavedGroupNotesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_saved_group_notes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_saved_group_notes_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_saved_group_notes_create_url
    assert_response :success
  end
end
